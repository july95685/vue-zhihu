import axios from 'axios'
import {
	NewsResource,
	NewsIdResource,
	NewsDateResource,
	NewsInfoResource,
	TopicsResource,
	TopicsIdResource,
	SectionsResource,
	SectionIdResource
} from './resource'

export default {
	getNews() {
		return axios.get( NewsResource )
	},
	getNewsById( id ) {
		return axios.get( NewsIdResource + id )
	},
	getNewsByDate( date ) {
		return axios.get( NewsDateResource + date )
	},
	getNewsInfoById( id ) {
		return axios.get( NewsInfoResource, {
			params: {
				id: id
			}
		} )
	},
	getTopics() {
		return axios.get( TopicsResource )
	},
	getTopicsById( topicid ) {
		return axios.get( TopicsIdResource + topicid )
	},
	getSections() {
		return axios.get( SectionsResource )
	},
	getSectionsById( sectionid ) {
		return axios.get( SectionIdResource, {
			params: {
				sectionid: sectionid
			}
		} )
	},
	getExpressData(){
		console.log(223);
		var url = "http://localhost:8080/api/tours";
		return axios.get( url )
	},
	linkMongodb(){
		
	}
}