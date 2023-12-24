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
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3DemobucketQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}