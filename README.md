# Ansible Playbook to deploy a Apache and NodeJS Web Server to an Ubuntu EC2 Virtual Machine
## Overview
Provision an Ubuntu EC2 Virtual Machine (VM) using Cloud Formation; an Infrastructure as Code (IaC) Tool and use Ansible to deploy Apache and NodeJs Web Server to the VM.
## Proces
- CD into the ec2 terraform directory and run:
  aws cloudformation create-stack  --stack-name apache-server --region us-east-1 --template-body file://server.yaml --parameters file://params.json --capabilities CAPABILITY_NAMED_IAM
