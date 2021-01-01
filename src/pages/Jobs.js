import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';//*
import { SafeAreaView, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { JobItem } from '../components'
import { jobs } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Jobs = (props) => {
  // console.log(props)
  const { selectedLanguage } = props.route.params

  const [data, setData] = useState([]) //??
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');//?? tıklananaı birdaha state attık ?
  console.log(selectedJob)

  const fetchData = async () => {
    const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
    // console.log(response)
    setData(response.data)
  };

  useEffect(() => {
    fetchData();
  }, [])

  const onJobSelect = (job) => {
    setModalFlag(true)
    setSelectedJob(job)
  }

  const renderJobs = ({ item }) => <JobItem job={item} onSelect={() => onJobSelect(item)} /> //



  const onJobSave = async () => {

    let savedJobList = await AsyncStorage.getItem("@SAVED_JOBS");
    // console.log(savedJobList) 

    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

    const updatedJobList = [...savedJobList, selectedJob]; //selectedjob aynı mı

    AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(updatedJobList));

  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          JOBS FOR {selectedLanguage.toUpperCase()}
        </Text>

        <FlatList data={data} renderItem={renderJobs} />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            position: 'absolute',
            bottom: 10,
            right: 10
          }}
          onPress={() => props.navigation.navigate('SavedJobs')}>

          <Text style={{ color: 'white' }}>My Favorites</Text>
        </TouchableOpacity>
        {/* ---------MODAL----------- */}
        <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalBackground}>
            <View style={jobs.modalContainer}>
              <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
              <Text>
                {selectedJob.location} / {selectedJob.title}
              </Text>
              <Text>{selectedJob.company}</Text>
            </View>
            <View style={jobs.jobDesc}>
              {/* <Text numberOfLines={5}>{selectedJob.description}</Text> */}
              <WebView
                source={{ html: selectedJob.description }}
              />
            </View>
            <Button title="Kaydet" onPress={onJobSave} />
          </View>

        </Modal>
      </View>
    </SafeAreaView>

  )

}
export { Jobs };

// company: "Schellman & Company, LLC."
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWFOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3bab0e75efc5ef66fb7e38bd0d4164e1f1462a55/schellman-logomark-fullcolor%20(1).png"
// company_url: "https://www.schellman.com"
// created_at: "Wed Nov 04 18:55:19 UTC 2020"
// description: "<p>If Pen Testing is your passion, if you love to do CTFs in your spare time (the 2nd step of our interview process!), if you have your OSCP, if you dream about attending security conferences (e.g. BlackHat, ShmooCon, DefCon, etc.) or eagerly git clone the latest tools / frameworks to play with in your home lab, then you’re exactly who Schellman is looking for to join our team.</p>↵<p>There is no typical day for our Pen Testers. Our clients rely on us to find a myriad of vulnerabilities across network, application, mobile, cloud, wireless and other assessments. The benefit of being exposed to so many different situations is that you are constantly building your knowledge base and skill set while keeping up with the latest cloud technologies and endpoint protection. Our team is remote yet extremely collaborative and works together to utilize their different backgrounds and experience to solve these problems.</p>↵<p>In addition to the hands-on training, Schellman also promotes a continuous learning environment. Team members are encouraged to attend at least one security conference and training event every year to stay on the cutting edge of the industry.</p>↵<p>Responsibilities:</p>↵<p>The primary responsibilities for this position will be leading network, application, and mobile penetration testing, as well as furthering team development and advancing the practice. Senior Penetration Testing Associates perform project execution and report preparation activities as the delivery lead on an engagement.</p>↵<p>Requirements:</p>↵<p>-At least three years hands-on penetration testing experience</p>↵<p>-At least one year of web application penetration testing experience</p>↵<p>-Completion of the OSCP Certification</p>↵<p>-Demonstrated enthusiasm for Information Security (e.g. GitHub repo, blogs, presentations, conference talks, local security association member, participated in free skill-building / hacking challenges – SANS Holiday Hack, HackerOne CTF, HackTheBox.eu, etc.)</p>↵<p>-Degree in computer science or information technology</p>↵<p>-Competency in common operating systems (e.g. Windows, macOS, Linux)</p>↵<p>-Proficiency with at least two scripting languages (e.g. Python, Bash, JavaScript, PowerShell)</p>↵<p>-An understanding of cloud computing models, technologies and concepts</p>↵<p>-Knowledge of PCI and FedRAMP programs</p>↵<p>-A passion for identifying and exploiting vulnerabilities</p>↵<p>-Demonstrated entrepreneurial abilities, client focus, industry savvy, and the ability to work independently or as part of a collaborative team</p>↵<p>-Self-driven in a remote working environment, motivation to continuously improve your skillset</p>↵<p>Schellman might not be as well-known, but we are well-liked. We’ve been recognized in the industry as #1 Best Firm to Work For 2020 by Accounting Today and Top 10 for Comp and Benefits on Glassdoor, but more importantly, our employees have great things to say about working here:  <a href="https://www.glassdoor.com/Reviews/Schellman-and-Company-Reviews-E666239.htm">https://www.glassdoor.com/Reviews/Schellman-and-Company-Reviews-E666239.htm</a></p>↵<p>We are open on location as this position is remote-based. Unfortunately, at this time, we cannot consider candidates that require sponsorship (now or in the future), or are located outside of the US.</p>↵<p>We are currently conducting interviews for 2021 start dates.</p>↵<p>Schellman &amp; Company, LLC. uses E-Verify in our hiring process.</p>↵<p>Schellman &amp; Company, LLC. is an equal opportunity employer (EOE) and strongly supports diversity in the workplace.</p>↵"
// how_to_apply: "<p>Please apply through our Careers Page at <a href="https://www.schellman.com/careers">https://www.schellman.com/careers</a></p>↵"
// id: "fef60af8-66c1-489d-b676-da05e1adea3a"
// location: "Remote"
// title: "Senior Penetration Tester"
// type: "Full Time"
// url: "https://jobs.github.com/positions/fef60af8-66c1-489d-b676-da05e1adea3a"