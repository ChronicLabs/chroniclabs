import { Octokit } from '@octokit/rest';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function main() {
  try {
    const accessToken = await getAccessToken();
    const octokit = new Octokit({ auth: accessToken });
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    // Check if repo exists
    try {
      const { data: repo } = await octokit.repos.get({
        owner: 'ChronicLabs',
        repo: 'chroniclabs'
      });
      console.log(`Repository found: ${repo.full_name}`);
      console.log(`Default branch: ${repo.default_branch}`);
      console.log(`Clone URL: ${repo.clone_url}`);
    } catch (e: any) {
      if (e.status === 404) {
        console.log('Repository not found. Creating it...');
        const { data: newRepo } = await octokit.repos.createInOrg({
          org: 'ChronicLabs',
          name: 'chroniclabs',
          private: false,
          description: 'Chronic Labs - Digital Experiences'
        });
        console.log(`Created repository: ${newRepo.full_name}`);
      } else {
        throw e;
      }
    }
    
    console.log('\nTo push your code, use the Git panel in Replit sidebar.');
    console.log('Your changes are committed and ready to push!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
