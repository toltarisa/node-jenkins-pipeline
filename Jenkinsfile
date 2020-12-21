pipeline {
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
  }
}