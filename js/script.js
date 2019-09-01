    var show_main_menu = false;

    function swipeMenu() {
        var menu = document.getElementById('main-menu-1');
        if(show_main_menu)
        {
            menu.style.setProperty('width','0px');
            menu.style.setProperty('transition','all 0.3s ease-in');
            for(var i = 1; i <= 3;i++)
            {
                document.getElementById('menu-item-'+i).style.setProperty('opacity', '0');
                document.getElementById('menu-item-'+i).style.setProperty('transition','opacity 0.2s ease-in')
            }
            show_main_menu = false;
        }
        else
        {
            menu.style.setProperty('width','200px');
            menu.style.setProperty('transition','all 0.3s ease-in');
            for(var i = 1; i <= 3;i++)
            {
                document.getElementById('menu-item-'+i).style.setProperty('opacity', '1');
                document.getElementById('menu-item-'+i).style.setProperty('transition','opacity 0.5s ease-in')
            }
            show_main_menu = true;
        }
    }

