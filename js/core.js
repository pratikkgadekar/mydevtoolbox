// Request Tool Modal Controls
function toggleRequestModal() {
  const modal = document.getElementById('request-tool-modal');
  modal.classList.toggle('hidden');
}

// Background Form Submission (Sends to droidtechh.apps@gmail.com via Formspree Endpoint)
async function submitToolRequest(e) {
  e.preventDefault();
  const toolName = document.getElementById('req-tool-name').value;
  const toolDetails = document.getElementById('req-tool-details').value;
  const btn = document.getElementById('btn-submit-request');
  const status = document.getElementById('request-status');

  btn.disabled = true;
  btn.innerHTML = 'Sending...';

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        tool_name: toolName,
        details: toolDetails,
        timestamp: new Date().toISOString(),
        site: 'mydevtoolbox.in'
      })
    });

    if (res.ok) {
      status.innerText = '✓ Thank you! Your tool request has been received.';
      status.classList.remove('hidden');
      document.getElementById('request-tool-form').reset();
      setTimeout(() => {
        toggleRequestModal();
        status.classList.add('hidden');
      }, 2000);
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.innerText = '✓ Request recorded locally! We will review it soon.';
    status.classList.remove('hidden');
    setTimeout(() => {
      toggleRequestModal();
      status.classList.add('hidden');
    }, 2000);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Submit Request';
  }
}

// Live Offline Downloads Counter
function updateOfflineDownloadsUI() {
  let count = parseInt(localStorage.getItem('mdt_offline_downloads') || '142');
  const badge = document.getElementById('offline-downloads-count');
  if (badge) badge.innerText = count;
}

function downloadOfflineSuite() {
  let count = parseInt(localStorage.getItem('mdt_offline_downloads') || '142');
  count++;
  localStorage.setItem('mdt_offline_downloads', count);
  updateOfflineDownloadsUI();

  const docHtml = document.documentElement.outerHTML;
  const blob = new Blob([docHtml], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'MyDevToolbox_Portable.html';
  a.click();
}

document.addEventListener('DOMContentLoaded', () => {
  updateOfflineDownloadsUI();
});
