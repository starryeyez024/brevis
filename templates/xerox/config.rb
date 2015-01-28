# Require any additional compass plugins installed on your system.
require 'compass'
require 'singularitygs'
require 'singularity-extras'
require 'breakpoint'
require 'toolkit'
require 'brevis'

# Default to development if environment is not set.
saved = environment
if (environment.nil?)
  environment = :development
else
  environment = saved
end

# Location of the theme's resources.
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
fonts_dir = "fonts"
http_images_path = "../images"
http_fonts_path = "../fonts"
generated_images_dir = images_dir + "/generated"
javascripts_dir = "js"


# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = false
asset_cache_buster :none
