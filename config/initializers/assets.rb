# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

#デフォルトではapplication.jsとapplication.cssしか対象になっていないため、config/initializers/assets.rbに設定を追加し、全ての JavaScript と CSS ファイルを対象にするようにする
Rails.application.config.assets.precompile += %w(*.js *.css)

#Rails で Views 系の Gem を使っている場合、使用している Gem によっては Precompile でエラーが発生する場合がある。
# その場合は、上記の設定の代わりに、以下のアンダースコアから始まるファイルを対象外とする設定を使用
Rails.application.config.assets.precompile << /(^[^_\/]|\/[^_])[^\/]*(\.js|\.css)$/
