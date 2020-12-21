pipeline {
   environment {
     dockerRegistry = "isatoltar45/node-dockerized"
     dockerRegistryCredential = 'docker-hub'
     dockerImage = ''
   }

  agent any
  tools {nodejs "node"}

  stages{
    stage("Cloning git") {
      steps {
        git "https://github.com/toltarisa/node-jenkins-pipeline"
      }
    }

    stage("Build") {
      steps {
        sh 'npm install'
      }
    }

    stage("Test") {
      steps {
        sh 'npm test'
      }
    }

    stage("Building image") {
      steps {
        script {
          dockerImage = docker.build dockerRegistry + ":$BUILD_NUMBER"
        }
      }
    }

    stage("Uploading image") {
      steps {
        script {
           docker.withRegistry( '', dockerRegistryCredential ) {
             dockerImage.push()
           }
        }
      }
    }

    stage('Remove Unused docker image') {
       steps{
         sh "docker rmi $dockerRegistry:$BUILD_NUMBER"
       }
     }
  }
}