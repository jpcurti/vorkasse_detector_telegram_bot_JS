pipeline{
    
    agent any

    stages {

        stage("build") {
            
            steps {
                echo 'building project'
                docker build -t testimage .
            }

        }

        stage("deploy") {

            steps {
                 echo 'deploying project'
                
            }

        }
    }

}