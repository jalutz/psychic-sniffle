pipeline {
  agent {
    docker 'node:6.3'
  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
        script {
          env.NODEJS_HOME = "${tool node7}"
          env.PATH="${env.NODEJS_HOME}:${env.PATH}"
          echo ${env.PATH}
          sh 'node -version'
        }
        
      }
    }
    stage('Npm test') {
      steps {
        sh 'npm test'
      }
    }
  }
}