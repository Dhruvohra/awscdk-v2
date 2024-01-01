import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch'

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Stack
    const demolambda = new lambda.Function(this, 'demolambda', {
      code: lambda.Code.fromAsset('../services/') ,
      handler: 'lambda_function.lambda_handler',
      runtime: lambda.Runtime.PYTHON_3_9,
      functionName: 'mycdktestlamdafunction',
    })

    //CloudWatch
    const cloudwatchdemo = new cloudwatch.Alarm(this, 'cloudwatchdemo', {
      metric: demolambda.metricErrors(),
      threshold: 1,
      evaluationPeriods: 1,
    })
    
  }
}
