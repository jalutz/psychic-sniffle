pipeline {
  agent {
    docker 'node:6.3'
  }
  stages {
    stage('build') {
      steps {
        node {
          env.NODEJS_HOME = "${tool 'Node 8.10.0'}"
          // on linux / mac
          env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
          sh 'npm --version'
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
