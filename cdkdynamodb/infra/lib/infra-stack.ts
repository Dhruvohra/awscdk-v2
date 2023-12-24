import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dynamodb_tableV2 = new dynamodb.Table(this, 'DynamoDBTable', {
      partitionKey: {
        name: 'TestStackid',
        type: dynamodb.AttributeType.NUMBER,
      },
      readCapacity: 3,
      writeCapacity: 3,
      tableName: 'MyDynamoDbCDKTestTable',
      removalPolicy: RemovalPolicy.DESTROY,
    })
  }
}
