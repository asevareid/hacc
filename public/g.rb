require 'fileutils'

folders = Dir.entries('.').select {|entry| File.directory? entry}.map{ |x| x.to_i}.uniq.sort

new_folder = folders.last + 1

Dir.mkdir new_folder.to_s
FileUtils.cp('template.html', "#{new_folder}/index.html")
FileUtils.cp('template.css', "#{new_folder}/index.css")


`code #{new_folder}/index.html`
`code #{new_folder}/index.css`
`open #{new_folder}/index.html`
