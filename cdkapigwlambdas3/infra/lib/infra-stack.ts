import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
      const bankbucket = new s3.Bucket(this, 'bankbucket', {
        bucketName: 'bankbucket-007'
      })
  }
}
