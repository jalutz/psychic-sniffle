pipeline {
  agent {
    docker 'node:8.10.0'
  }
  stages {
    stage('build') {
      steps {
        sh '''npm --version
'''
        sh 'sudo npm install'
      }
    }
    stage('Npm test') {
      steps {
        sh 'mocha "!(node_modules)/**/*.spec.js"'
      }
    }
    stage('Push') {
      steps {
        git(url: 'https://github.com/jalutz/psychic-sniffle', branch: 'acceptance', changelog: true)
      }
    }
  }
}