function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    
    for (let i = 0; i < activeTabs.length; i++) {
      activeTabs[i].className = activeTabs[i].className.replace('active', '');
    }
    // activate new tab 
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }
  
  
  const element = document.getElementById('vertical-nav-tabs');
  element.addEventListener('click', onTabClick, false);