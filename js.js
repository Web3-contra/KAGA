function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    const menubarremove = document.getElementById('amenu')
    menubarremove.style.display ='none'
    
}
function removesidebar(){
    const removeside = document.querySelector('.sidebar')
    removeside.style.display = 'none'
    const menubarremove = document.getElementById('amenu')
    menubarremove.style.display ='inline'
}
