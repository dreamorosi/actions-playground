import * as cdk from "aws-cdk-lib";
import { Role, WebIdentityPrincipal } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const randomRole = new Role(this, "RandomRole", {
      assumedBy: new WebIdentityPrincipal("cognito-identity.amazonaws.com"),
    });

    new cdk.CfnOutput(this, "RandomRoleArn", {
      value: randomRole.roleArn,
    });
  }
}
