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


# AWS CDK S3, Lambda, and API Gateway Stack

This AWS CDK stack deploys an S3 bucket, an AWS Lambda function, and an API Gateway.

## 1. S3 Bucket

The stack creates an S3 bucket named `bankbucket-007` with the following configuration:

- **Bucket Name:** `bankbucket-007`
- **Removal Policy:** `DESTROY` (Deletes the S3 bucket and its objects when the CloudFormation stack is deleted)
- **Auto Delete Objects:** Enabled (Deletes objects automatically when the CloudFormation stack is deleted)

## 2. IAM Role

An IAM role named `bankingLambdaRole` is created with the following configuration:

- **Role Name:** `bankingLambdaRole`
- **Description:** Role for Lambda to access the S3 bucket
- **Assumed By:** Lambda service principal (`lambda.amazonaws.com`)
- **Managed Policy:** AmazonS3FullAccess

## 3. Lambda Function

An AWS Lambda function named `mycdkbanklamdafunction` is created with the following configuration:

- **Function Name:** `mycdkbanklamdafunction`
- **Runtime:** Python 3.9
- **Handler:** `bank-lambda.lambda_handler`
- **Code:** Packaged from the `../services/` directory
- **IAM Role:** `bankingLambdaRole` (previously created)

## 4. API Gateway

An API Gateway named `bankingrestapi` is created with the following configuration:

- **Rest API Name:** `bankingrestapi`
- **Proxy Integration:** Disabled
- **Resource:** `/bankstatus`
- **HTTP Method:** `GET`
  
## Prerequisites

- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) installed
- AWS CLI configured with necessary permissions

## Deployment

1. Clone this repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Deploy the AWS CDK stack:

    ```bash
    cdk deploy
    ```

## Cleanup

To remove the deployed stack and associated resources, run:

```bash
cdk destroy
