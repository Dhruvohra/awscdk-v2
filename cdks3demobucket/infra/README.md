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



# AWS CDK S3 Bucket Stack

## 1. S3 Bucket

The main resource created by your AWS CDK stack is an Amazon S3 bucket. Here are the details of this resource:

- **Resource Type:** `AWS::S3::Bucket`
  
- **Logical ID:** `s3demobucket2310` (specified as the second argument in the `new s3.Bucket(this, 's3demobucket2310', {...})` constructor)

- **Bucket Name:** `demos3bucket2310199` (specified by `bucketName: 'demos3bucket2310199'`)

- **Versioning:** Enabled (configured by `versioned: true`)

- **Public Read Access:** Disabled (configured by `publicReadAccess: false`)

- **Removal Policy:** `DESTROY` (specified by `removalPolicy: RemovalPolicy.DESTROY`)

- **Auto Delete Objects:** Enabled (configured by `autoDeleteObjects: true`)

   The removal policy of `DESTROY` indicates that when the CloudFormation stack is deleted, the S3 bucket and its objects should also be deleted, ensuring complete cleanup.

## 2. Stack Details

This section provides a summary of the key details of the S3 bucket created by the stack, such as the bucket name, versioning status, public read access, removal policy, and auto delete objects configuration.

## 3. Prerequisites

This section outlines the prerequisites for deploying the AWS CDK stack, such as having AWS CDK installed and the AWS CLI configured with the necessary permissions.

## 4. Deployment

Instructions on how to deploy the AWS CDK stack. It includes steps to clone the repository, install dependencies, and deploy the stack using the `cdk deploy` command.

## 5. Cleanup

Instructions on how to remove the deployed stack and associated resources using the `cdk destroy` command. It emphasizes that the specified removal policy will also result in the deletion of the S3 bucket and its objects.

