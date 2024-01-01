import json
import boto3

def lambda_handler(event, context):
    # Specify your S3 bucket name and JSON file key
    bucket_name = 'bankbucket-007'
    json_file_key = 'banking-data.json'

    # Create an S3 client
    s3 = boto3.client('s3')

    try:
        # Read JSON file from S3
        response = s3.get_object(Bucket=bucket_name, Key=json_file_key)
        json_content = response['Body'].read().decode('utf-8')

        # Parse the JSON content
        json_data = json.loads(json_content)

        # Process the JSON data (replace this with your logic)
        print(json_data)

        return {
            'statusCode': 200,
            'body': 'JSON file read successfully.'
        }

    except Exception as e:
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'body': 'Error reading JSON file from S3.'
        }
