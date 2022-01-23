{ name = "halogen-project"
, dependencies = [ "console", "effect", "halogen", "prelude", "psci-support" ]
, packages = ./packages-v0.14.5.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
