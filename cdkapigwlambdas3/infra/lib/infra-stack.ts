import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
      // S3 Bucket
      const bankbucket = new s3.Bucket(this, 'bankbucket', {
        bucketName: 'bankbucket-007'
      })

      // IAM Role
      const bankrole = new iam.Role(this, 'bankrole', {
        roleName: 'bankingLambdaRole',
        description: 'role for lambda to access the s3bucket',
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'), 
      })
      //IAM Policy
      bankrole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'));

      // Lambda Function
      const banklambda = new lambda.Function(this, 'banklambda', {
        code: lambda.Code.fromAsset('../services/') ,
        handler: 'bank-lambda.lambda_handler',
        runtime: lambda.Runtime.PYTHON_3_9,
        functionName: 'mycdkbanklamdafunction',
        role: bankrole,
      })

      // API Gateway
      const bankapigateway = new apigateway.LambdaRestApi(this, 'bankapigateway', {
        handler: banklambda,
        restApiName: 'bankingrestapi',
        deploy: true,
        proxy: false,
      })
      const bankstatus = bankapigateway.root.addResource('bankstatus');
      bankstatus.addMethod('GET');
  }
}
