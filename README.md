# Themes
Themes are extensions to the current base themes.  
Any theme labeled `Light` requires the base light theme be running, and the same for `Dark` and `Black`.
###### Installing a theme:
* Set the note type to CSS
* Paste in the theme
* Add a label of `appCss`
* Press ctrl+R to refresh Trilium

*be aware only one theme should be turned on at once, as they will fight at the moment*  
More detailed explanation within the official wiki [here](https://github.com/zadam/trilium/wiki/Themes).


### Monochrome Material Light
![alt](https://i.imgur.com/edFwOdl.png)

### Monochrome Material Dark
![alt](https://i.imgur.com/Amlomez.png)

# Plugins
Plugins may contain styling as well as an index.js that contain everything needed for it.

###### Installing a plugin:
* setup CSS file as if it were a theme (you do not need to remove the active theme)
* add a label to the index.js file with the name of `run` and the value of `frontendStartup`
* Press ctrl+R to refresh Trilium
