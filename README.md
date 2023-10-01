# Ansible Playbook to deploy a Apache and NodeJS Web Server to an Ubuntu EC2 Virtual Machine
## Overview
Provision an Ubuntu EC2 Virtual Machine (VM) using Cloud Formation; an Infrastructure as Code (IaC) Tool and use Ansible to deploy Apache and NodeJs Web Server to the VM.
## Proces
- Install ansible on the control node(I used an Ubuntu 20.04 VM created with wsl2 on my Windows machine).
- CD into the ec2 terraform directory and run:
  aws cloudformation create-stack  --stack-name apache-server --region us-east-1 --template-body file://server.yaml --parameters file://params.json --capabilities CAPABILITY_NAMED_IAM
- Edit the inventory.txt and add the public IP address of the EC2 instance instance you just created
- CD to your project folder and run :
    ansible-playbook -i inventory.txt main.yml --private-key=~/xxxxxxx.pem
- Delete Cloud Formation Stack:
    aws cloudformation delete-stack --stack-name apache-server --region=us-east-1
