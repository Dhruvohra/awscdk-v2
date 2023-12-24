# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template



# AWS CDK DynamoDB Table Stack

## 1. DynamoDB Table

The main resource created by your AWS CDK stack is an Amazon DynamoDB table. Here are the details of this resource:

- **Resource Type:** `AWS::DynamoDB::Table`
  
- **Logical ID:** `DynamoDBTable` (specified as the second argument in the `new dynamodb.Table(this, 'DynamoDBTable', {...})` constructor)

- **Partition Key:**
  - **Name:** `TestStackid`
  - **Type:** `Number`

- **Read Capacity:** 3 (configured by `readCapacity: 3`)

- **Write Capacity:** 3 (configured by `writeCapacity: 3`)

- **Table Name:** `MyDynamoDbCDKTestTable` (specified by `tableName: 'MyDynamoDbCDKTestTable'`)

- **Removal Policy:** `DESTROY` (specified by `removalPolicy: RemovalPolicy.DESTROY`)

   The removal policy of `DESTROY` indicates that when the CloudFormation stack is deleted, the DynamoDB table should also be deleted, ensuring complete cleanup.

## 2. Stack Details

This section provides a summary of the key details of the DynamoDB table created by the stack, such as the table name, partition key details, read and write capacities, and the removal policy.

## 3. Prerequisites

This section outlines the prerequisites for deploying the AWS CDK stack, such as having AWS CDK installed and the AWS CLI configured with the necessary permissions.

## 4. Deployment

Instructions on how to deploy the AWS CDK stack. It includes steps to clone the repository, install dependencies, and deploy the stack using the `cdk deploy` command.

## 5. Cleanup

Instructions on how to remove the deployed stack and associated resources using the `cdk destroy` command. It emphasizes that the specified removal policy will also result in the deletion of the DynamoDB table.
