import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class WebserverStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // VPC & Subnets
    const myVPC = new ec2.Vpc(this, 'WebserverVPC', {
      vpcName: 'DemoVPC',
      ipAddresses: ec2.IpAddresses.cidr("10.16.0.0/16"),
      natGateways: 0, // At default it incur costs so imp to mark it as 0 if not required.
    });

    // Security Group
    const mySG = new ec2.SecurityGroup(this, 'WebserverSG', {
      vpc: myVPC,
      securityGroupName: 'WebserverSG',
      description: 'My dummy webserver SG which allows http traffic',
      allowAllOutbound: true,
    });

    mySG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow all http traffic')
  }
}
