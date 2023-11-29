const shell = require('shelljs')

function formatDate(date) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return date.toLocaleString('en-GB', options).replace(/[^\d-:]/g, ' ');
}


shell.exec('git add .')

shell.exec(`git commit -m "commit at ${formatDate(new Date())}"`)

shell.exec(`git push origin main`)
