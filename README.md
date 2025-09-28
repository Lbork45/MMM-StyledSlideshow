# MMM-StyledSlideshow

*MMM-StyledSlideshow* is a module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) that displays a slideshow of images at a regular interval.

## Screenshot

![Example of MMM-StyledSlideshow](./example_1.png)

## Installation

### Install

In your terminal, go to the modules directory and clone the repository:

```bash
cd ~/MagicMirror/modules
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
        position: 'lower_third'
    },
```

Configuration with all options:

```js
    {
        module: 'MMM-StyledSlideshow',
        position: 'lower_third',
        config: {
            imageFolder: '/my_images',
            scrollInterval: 1000
        }
    },
```

### Configuration options

Option|Possible values|Default|Description
------|------|------|-----------
`imageFolder`|`string`|`/images`|The folder to draw images from
`scrollInterval`|`integer`|`3000`|The rotation interval, in milliseconds

## Sending notifications to the module

Notification|Description
------|-----------

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.