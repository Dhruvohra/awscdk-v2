import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam'

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
      const bankbucket = new s3.Bucket(this, 'bankbucket', {
        bucketName: 'bankbucket-007'
      })

      const bankrole = new iam.Role(this, 'bankrole', {
        roleName: 'bankingLambdaRole',
        description: 'role for lambda to access the s3bucket',
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'), 
      })
      bankrole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess'));
  }
}
