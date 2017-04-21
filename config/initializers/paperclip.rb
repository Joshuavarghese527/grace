# config/initializers/paperclip.rb
Paperclip::Attachment.default_options[:s3_host_name] = 'https://console.aws.amazon.com/s3/buckets/grace-east-queens/?region=us-west-2&tab=overview'
