import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { RemovalPolicy } from 'aws-cdk-lib';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3demobucket = new s3.Bucket(this, 's3demobucket2310', {
      bucketName: 'demos3bucket2310199',
      versioned: true,
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,  // Removal policy in cdk is known as Deletion Policy in CloudFormation. Both are same technically.
      // Possible values for removal policy are destroy/retain/snapshot for most of the services default is destroy
      // s3 has retain as default and rds as snapshot as default(For all database services default is mainly taking snapshot). 
      autoDeleteObjects: true
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3DemobucketQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}