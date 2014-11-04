# Description
description "Xerox: The Omega subtheme!"

# Stylesheet Import
file 'styles.sass', :like => :stylesheet, :media => 'screen, projection'
file 'styles.no-query.scss', :like => :stylesheet, :media => 'screen, projection', :condition => "lt IE 9"

# Javascript Import
# file 'scripts.js', :like => :javascript, :to => 'scripts.js'

# General File Import
# file 'README.md', :to => "README.md"

# Compass Extension Help
help %Q{
  Help for your Compass extension
}

# Compass Extension Welcome Message
#  Users will see this when they create a new project using this template.
welcome_message %Q{
  Welcome to Xerox: The Omega subtheme!
}