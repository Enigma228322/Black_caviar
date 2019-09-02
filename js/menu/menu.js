    var show_main_menu = false;

    function swipeMenu() {
        var menu = document.getElementById('main-menu-1');
        var cbp = document.getElementById('cbp-bicontrols');
        var center_text = document.getElementById('main-center-text');
        var sub_center_text = document.getElementById('sub-main-center-text');
        var hat = document.getElementById('hat');
        if(show_main_menu)
        {
            menu.style.setProperty('width','0px');
            menu.style.setProperty('transition','all 0.3s ease-in');
            for(var i = 1; i <= 3;i++)
            {
                document.getElementById('menu-item-'+i).style.setProperty('opacity', '0');
                document.getElementById('menu-item-'+i).style.setProperty('transition','opacity 0.2s ease-in')
            }
            center_text.style.setProperty('margin-left','0px');
            center_text.style.setProperty('transition','all 0.3s ease-in');
            sub_center_text.style.setProperty('margin-left','0px');
            sub_center_text.style.setProperty('transition','all 0.3s ease-in');
            cbp.style.setProperty('margin-left','0px');
            cbp.style.setProperty('transition','all 0.3s ease-in');
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
            center_text.style.setProperty('margin-left','200px');
            center_text.style.setProperty('transition','all 0.3s ease-in');
            sub_center_text.style.setProperty('margin-left','200px');
            sub_center_text.style.setProperty('transition','all 0.3s ease-in');
            cbp.style.setProperty('margin-left','200px');
            cbp.style.setProperty('transition','all 0.3s ease-in');
            show_main_menu = true;
        }
    }

