Copy Dynamodb Table
===================

This module will allow you to copy data from one table to another using very simple API, Support cross zone copying and AWS config for each table ( source & destination ) and it can create the destination table using source table schema


## Note :

  - If `source.config` or `destination.config` value is `undefined` , the module will use the `globalAWSConfig`.
  - If `globalAWSConfig` value is `undefined` the module will extact `AWS` config from environment variables.
  - Increase Write capacity for your dynamodb table temporarily until the copying is finished so you can get the highest copying speed


