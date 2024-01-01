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



# AWS CDK Webserver Stack

This AWS CDK stack deploys a simple web server setup in an Amazon VPC using Amazon EC2 instances.

## 1. VPC & Subnets

The stack creates an Amazon VPC named `DemoVPC` with the following configuration:

- **VPC Name:** `DemoVPC`
- **IP Addresses:** `10.16.0.0/16`
- **NAT Gateways:** 0 (No NAT gateways to avoid costs)

## 2. Security Group

A security group named `WebserverSG` is created for the EC2 instances with the following settings:

- **Security Group Name:** `WebserverSG`
- **Description:** My dummy web server SG which allows HTTP traffic
- **Ingress Rule:** Allows all HTTP traffic (TCP port 80) from any IPv4 address

## 3. EC2 Instance

An EC2 instance named `myec2` is launched with the following characteristics:

- **Instance Type:** `t2.micro`
- **Amazon Machine Image (AMI):** Latest Amazon Linux 2
- **VPC:** Uses the created VPC (`DemoVPC`)
- **Subnet Type:** Public subnet
- **Security Group:** `WebserverSG` (previously created)

## 4. UserData

The EC2 instance is configured with UserData read from the `./lib/userdata.sh` file. This allows custom setup and configurations on the EC2 instance.

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
