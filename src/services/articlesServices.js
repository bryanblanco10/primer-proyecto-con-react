import axios from 'axios'
import API_CONFIG from '../config'

let {API_URL} = API_CONFIG

export default{
	getArticles(){
		return axios.get(API_URL + 'articles', {
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
	},

	getLastArticles(){
		return axios.get(API_URL + 'articles/:last?', {
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
	},

	getArticle(id){
		return axios.get(API_URL + `article/${id}`, {
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
	},

	searchArticle(search){
		return axios.get(API_URL + `search/${search}`, {
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
	},

  postArticle(article){
    return axios.post(API_URL + 'save', article,{
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
  },

  postImageArticle(articleId,article){
    return axios.post(API_URL + `upload-image/${articleId}`, article,{
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
  },

  putArticle(articleId,article){
    return axios.put(API_URL + `article/${articleId}`, article,{
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
  },

  deleteArticle(articleId){
    return axios.delete(API_URL + `article/${articleId}`,{
      headers: {
        'cache-control': "no-cache, private",
        'content-type': "application/json"
      }
    });
  },
}