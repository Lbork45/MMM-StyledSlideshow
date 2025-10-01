# MMM-StyledSlideshow

*MMM-StyledSlideshow* is a module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) that displays a slideshow of images at a regular interval.
# MMM-StyledSlideshow

*MMM-StyledSlideshow* is a module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) that displays a slideshow of images at a regular interval.

## Screenshot

![Example of MMM-StyledSlideshow](./example_1.png)
![Example of MMM-StyledSlideshow](./example_1.png)

## Installation

### Install

In your terminal, go to the modules directory and clone the repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/Lbork45/MMM-StyledSlideshow.git
git clone https://github.com/Lbork45/MMM-StyledSlideshow.git
```

### Update

Go to the module directory and pull the latest changes:

```bash
cd ~/MagicMirror/modules/MMM-Template
git pull
```

## Configuration

To use this module, you have to add a configuration object to the modules array in the `config/config.js` file.

### Example configuration

Minimal configuration to use the module:

```js
    {
        module: 'MMM-StyledSlideshow',
        position: 'middle_center'
        module: 'MMM-StyledSlideshow',
        position: 'middle_center'
    },
```

Configuration with all options:

```js
    {
        module: 'MMM-StyledSlideshow',
        position: 'middle_center',
        module: 'MMM-StyledSlideshow',
        position: 'middle_center',
        config: {
            imageFolder: 'my_images',
            scrollInterval: 1000,
            width: 50,
            height: 40,
        }
    },
```

### Configuration options

Option|Possible values|Default|Description
------|------|------|-----------
`imageFolder`|`string`|`example_images`|The folder to draw images from. MUST be a subfolder of MMM-StyledSlideshow.
`scrollInterval`|`integer`|`30000`|The rotation interval, in milliseconds
`refreshInterval`|`integer`|`360000`|The interval on which the program reloads all pictures from the folder
`width`|`integer`|`40`|The width of all pictures, in % of screen width
`height`|`integer`|`40`|The height of all pictures, in % of screen height

> As of now, the refreshInterval is a placeholder because of a bug I haven't figured out yet. If anyone wants to try, please fork the repo and once fixed, I will merge it. 

## Sending notifications to the module

Notification|Description
------|-----------
CHANGE_IMAGE|Change the current image
CHANGE_IMAGE|Change the current image

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.