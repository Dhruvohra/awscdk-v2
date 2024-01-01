import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { readFileSync } from 'fs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class WebserverStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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

    mySG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow all http traffic');

    // Create a EC2 Instance
    const ec2machine = new ec2.Instance(this, 'myec2', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO) ,
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      vpc: myVPC,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      securityGroup: mySG,
      // keyName: 'myKey', // to use ssh you have to allow port 22 in SG.
    });
    // UserData
    const userData = readFileSync('./lib/userdata.sh', 'utf8');
    ec2machine.addUserData(userData)
  }
}
