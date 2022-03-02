pipeline {
    agent { label 'worker1' }

    environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
        CLUSTER_NAME = credentials('CLUSTER_NAME')
        REGISTRY = credentials('REGISTRY')
        SERVICE_NAME = 'wayabank-home-website'
        VERSION = sh (script: 'git rev-parse HEAD', returnStdout: true).trim().take(10)
    }

    stages {
        
        /*stage('Security Scan') {
            steps {
                withSonarQubeEnv('Waya Sonar') {
                    sh 'mvn clean verify sonar:sonar -DskipTests -Dsonar.projectKey=WAYA-PAY-CHAT-2.0-REACTJS-NEW-WEBSITE'
                }
            }
        }*/

        stage("Build For Staging") {
            environment { 
                NAMESPACE = 'staging'
                REACT_APP_CORPORATE_APP = 'https://business.staging.wayabank.ng'
                REACT_APP_PERSONAL_APP = 'https://ibank.staging.wayabank.ng'
                REACT_APP_BASE_URL = 'https://services.staging.wayabank.ng'
                IS_LIVE = 'false'
            }
            steps{
                script {
                    sh '''
                        sudo npm install
                        sudo npm run build
                    '''
                    echo 'Build with Nodejs'
                }
            }   
        }
        
        stage("Build for Production") {
            environment { 
                NAMESPACE = 'production'
                REACT_APP_CORPORATE_APP = 'https://business.wayabank.ng'
                REACT_APP_PERSONAL_APP = 'https://ibank.wayabank.ng'
                REACT_APP_BASE_URL = 'https://services.wayabank.ng'
                IS_LIVE = 'true'
            }
            steps{
                script {
                    sh '''
                        sudo npm install
                        sudo npm run build
                    '''
                    echo 'Build with Nodejs'
                }
            }   
        }

        stage('Image Build') {
            steps {
                script {
                    dockerImage = docker.build "${REGISTRY}/${SERVICE_NAME}:${VERSION}"
                }
            }
        }

        stage('LOGIN TO ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin ${REGISTRY}"
                }
            }
        }

        stage('Pushing to ECR') {
            steps {
                script {
                    sh "docker push ${REGISTRY}/${SERVICE_NAME}:${VERSION}"
                }
            }
        }

        stage('Deploy to Staging') {
            environment { 
                NAMESPACE = 'staging'
                
            }
            when {
                branch 'staging'
            }
            steps {
                script {
                    sh '''
                        chmod +x ./deploy.sh
                        ./deploy.sh
                        '''
                }
            }
        }

        stage('Deploy to Production') {
            environment { 
                NAMESPACE = 'production'
                
            }
            when {
                branch 'production'
            }
            steps {
                script {
                    sh '''
                        chmod +x ./deploy.sh
                        ./deploy.sh
                        '''
                }
            }
        }
    }
}
