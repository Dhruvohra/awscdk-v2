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


# AWS CDK Lambda and CloudWatch Stack

This AWS CDK stack deploys an AWS Lambda function and a CloudWatch alarm to monitor errors from the Lambda function.

## 1. Lambda Function

The stack creates an AWS Lambda function named `mycdktestlamdafunction` with the following configuration:

- **Function Name:** `mycdktestlamdafunction`
- **Runtime:** Python 3.9
- **Handler:** `lambda_function.lambda_handler`
- **Code:** Packaged from the `../services/` directory

## 2. CloudWatch Alarm

A CloudWatch alarm named `cloudwatchdemo` is set up to monitor errors from the Lambda function:

- **Metric:** Errors from the `mycdktestlamdafunction` Lambda function
- **Threshold:** 1
- **Evaluation Periods:** 1

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
