
    //ENDPOINTS 
    
    //*********USERS************

    //GET
    export function getAllUsers(token){
       return  fetch("/api/users?token=" + token) 
        .then(response => response.json())
    }
    export function getUsersInfo(token, id_user){
      return  fetch("/api/users/user/" + id_user + "?token=" + token) 
       .then(response => response.json())
   }
    export function getUserToken(token){
        return fetch("/api/users/user?token=" + token) 
        .then(response => response.json())
    }
    export function getAllTeamsFromUser(token, userID){
        return  fetch("/api/users/user/" + userID + "/teams?token=" + token)
        .then(response => response.json())
    }
    export function getUserDepartments(token, userID){
        return fetch("/api/users/user/" + userID + "/departments?token=" + token) 
          .then(response => response.json())
      }
      export function getUserTeams(token, id_team){
        return fetch("/api/teams/team/" + id_team + "/users?token=" + token) 
          .then(response => response.json())
      }
      export function getNotifications(token, id_user){
        return fetch("/api/users/user/" + id_user + "/notifications?token=" + token) 
          .then(response => response.json())
      }
    
      //********DEPARTMENTS**************
    export function getAllTeamsFromDepartment(token, departmentID){
        return  fetch("/api/departments/" + departmentID + "/teams?token=" + token)
        .then(response => response.json())
     }
     export function getAllUsersFromDepartment(token, departmentID){
        return  fetch("/api/departments/" + departmentID + "/users?token=" + token)
        .then(response => response.json())
     }
    export function  getAllDepartments(token){
       return fetch("/api/departments?token=" + token) 
        .then(response => response.json())
    }
    
     //********TEAMS**********

    //GET
    export function getAllTaskFromTeam(token, teamID){
      return fetch("/api/teams/team/"+ teamID + "/tasks?token=" + token)
      .then(response => response.json())
  }
  export function getImages(type, ID){
    return fetch("/assets/images/" + type + "/" + ID)
    .then(res => { return res.blob() })
}
  export function getOrganization(token, id_team){
    return fetch("/api/teams/team/"+ id_team + "/org_chart?token=" + token)
    .then(response => response.json())
}
  export function getAllTags(token){
    return fetch("/api/tags?token=" + token)
    .then(response => response.json())
}
export function getAllSubTags(token){
  return fetch("/api/subtags?token=" + token)
  .then(response => response.json())
}
export function getMessage(token, id_task){
return fetch("/api/tasks/" + id_task + "/messages?token=" + token)
.then(response => response.json())
}
export function getSubtaskMessage(token, id_subtask){
return fetch("/api/subtasks/" + id_subtask + "/messages?token=" + token)
.then(response => response.json())
}
export function getTaskStored(token, id_team){
  return fetch("/api/teams/team/" + id_team + "/tasks/stored?token=" + token)
  .then(response => response.json())
  }

    
    //POST //departmens
    export function postDepartment(formData){
        return fetch("/api/departments?token=" + token,
        {  
          method: "POST",
           body: formData })
        .then(response =>  { 
            if (response.status === 404) {
              return response.json()
            }
          })
    }
    export function postTeamToDepartment(formData, departmentID){
      return fetch("/api/departments/" + departmentID + "/teams",{
           method: "POST",
           body: formData 
           })
          .then(resp =>  { 
            if(resp.status >= 200 && resp.status < 300) {
                return Promise.resolve(resp)
              } else {
                return Promise.reject(new Error(resp.statusText))
              }        
          })
          .then(resp => {
            return resp.json()
          })
   }
   export function postUserToDepartment(formData, departmentID){
    return   fetch("/api/departments/" + departmentID + "/users",{
        method: "POST",
        body: formData 
        })
       .then(resp =>  { 
         if(resp.status >= 200 && resp.status < 300) {
         return resp.json()
         }
       })
       
}

    

    //POST //tasks
    export function postTime(formData,id_task){
      return fetch("/api/tasks/" + id_task + "/time_working",
      {  
        method: "POST",
         body: formData })
      .then(response =>  { 
          if (response.status === 404) {
            return response.json()
          }
        })
  }
  export function postEditName(formData,id_task){
    return fetch("/api/tasks/" + id_task + "/name",
    {  
      method: "POST",
       body: formData })
    .then(response =>  { 
        if (response.status === 404) {
          return response.json()
        }
      })
}

export function postFilesTask(formData,id_task){
  return fetch("/api/tasks/" + id_task + "/file",
  {  
    method: "POST",
     body: formData })
  .then(response =>  { 
      if (response.status === 404) {
        return response.json()
      }
    })
}
export function postStoreTask(formData,id_task){
  return fetch("/api/tasks/" + id_task + "/store",
  {  
    method: "POST",
     body: formData })
  .then(response =>  { 
      if (response.status === 404) {
        return response.json()
      }
    })
}
export function postMessage(formData, id_task){
  fetch("/api/tasks/" + id_task + "/message",{
      method: "POST",
      body: formData 
      })
      .then(resp =>  { 
        if(!resp.ok){
          throw new Error(resp.statusText);
        }
        return resp.json()
      }) 
}
export function setDate(formData, id_task){
  return fetch("/api/tasks/"+ id_task + "/time_limit",{
    method: "POST",
    body: formData 
    })
   .then(resp =>  { 
     if(!resp.ok){
       throw new Error(resp.statusText);
     }
     return resp.json()
   })  
 }
 export function postAddUserToTask(formData, id_task){
  return fetch("/api/tasks/" + id_task + "/user",{
    method: "POST",
    body: formData 
    })
   .then(resp =>  { 
     if(!resp.ok){
       throw new Error(resp.statusText);
     }
     return resp.json()
   })  
 }
 export function postSubTask(formData, id_task){
  return fetch("/api/tasks/"+ id_task + "/subtask",{
    method: "POST",
    body: formData 
    })
   .then(resp =>  { 
     if(!resp.ok){
       throw new Error(resp.statusText);
     }
     return resp.json()
   })  
 }
 export function setTime(formData, id_task){
  return fetch("/api/tasks/" + id_task + "/time_working/add",{
    method: "POST",
    body: formData 
    })
   .then(resp =>  { 
     if(!resp.ok){
       throw new Error(resp.statusText);
     }
     return resp.json()
   })  
 }
        ///PUT //task
 export function putChangeTags(formData, id_task){
  return fetch("/api/tasks/" + id_task + "/tags" ,{
      method: "POST",
      body: formData 
      })
     .then(resp =>  { 
       if(!resp.ok){
         throw new Error(resp.statusText);
       }
       return resp.json()
     })  
 }
 export function putChangeStatusTask(id_status, token, id_task){
  return fetch("/api/tasks/" + id_task + "/status" ,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'id_status='+id_status+'&token='+token
      })
     .then(resp =>  { 
       return resp.json()
     })  
 }
 
//POST //subtasks
export function postEditNameSubtask(formData,id_subtask){
  return fetch("/api/subtasks/" + id_subtask + "/name",
  {  
    method: "POST",
     body: formData })
  .then(response =>  { 
      if (response.status === 404) {
        return response.json()
      }
    })
}
  export function postTimeSubtask(formData,id_subtask){
    return fetch("/api/subtasks/" + id_subtask + "/time_working",
    {  
      method: "POST",
       body: formData })
    .then(response =>  { 
        if (response.status === 404) {
          return response.json()
        }
      })
}
  
    export function postIncident(formData, id_team){
      return fetch("/api/incidents/" + id_team,
      {  
        method: "POST",
         body: formData })
      .then(response =>  { 
          if (response.status === 404) {
            return response.json()
          }
        })
  }
  export function postSubtaskMessage(formData, id_subtask){
    fetch("/api/subtasks/" + id_subtask + "/message",{
        method: "POST",
        body: formData 
        })
        .then(resp =>  { 
          if(!resp.ok){
            throw new Error(resp.statusText);
          }
          return resp.json()
        }) 
  }
  export function ChangeSubTags(formData, id_subtask){
    return fetch("/api/subtasks/"+ id_subtask + "/subtag",{
      method: "POST",
      body: formData 
      })
     .then(resp =>  { 
       if(!resp.ok){
         throw new Error(resp.statusText);
       }
       return resp.json()
     })  
   }
   export function postAddUserToSubTask(formData, id_task){
    return fetch("/api/subtasks/" + id_task + "/user",{
      method: "POST",
      body: formData 
      })
     .then(resp =>  { 
       if(!resp.ok){
         throw new Error(resp.statusText);
       }
       return resp.json()
     })  
   }
   export function setDateSubtask(formData, id_subtask){
    return fetch("/api/tasks/"+ id_subtask + "/time_limit",{
      method: "POST",
      body: formData 
      })
     .then(resp =>  { 
       if(!resp.ok){
         throw new Error(resp.statusText);
       }
       return resp.json()
     })  
   }
  
   export function setTimeSubtask(formData, id_task){
    return fetch("/api/subtasks/" + id_task + "/time_working/add",{
      method: "POST",
      body: formData 
      })
     .then(resp =>  { 
       if(!resp.ok){
         throw new Error(resp.statusText);
       }
       return resp.json()
     })  
   }

    //POST //teams
export function createUserInTeam(formData, teamID){
    fetch("/api/teams/team/" + teamID + "/users",{
        method: "POST",
        body: formData 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error('No se ha podido crear elS usuario');
         }
       })
}
export function postTaskToTeam(formData, teamID){
  return fetch("/api/teams/team/" + teamID + "/tasks",
  {  
  method: "POST",
  body: formData })
  .then(response =>  { 
      if (response.status === 404) {
      return response.json()
      }
  })
}

//POST users
export function createUser(formData){
  return fetch("/api/users",
  {  
    method: "POST",
     body: formData })
     .then(resp =>  { 
      if(!resp.ok){
        throw new Error('No se ha podido crear el usuario');
      }
            
    })
}
export function changeProfile(formData, userID){
  return   fetch("/api/users/user/" + userID,
  {  
    method: "POST",
     body: formData })
  .then(response =>  { 
      if (response.status === 404) {
        return response.json()
      }
    })
}
export function changePassword(formData, userID){
  return fetch("/api/users/user/" + userID,
  {  
    method: "POST",
     body: formData })
  .then(response =>  { 
      if (response.status === 404) {
        return response.json()
      }
    })
}

   export function Login(formData){
    return fetch("/api/auth/login",{
        method: "POST",
        body: formData 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }


   
   //DELETE
   export function deleteTask(token, id_task){
    return fetch("/api/tasks/" + id_task ,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'token=' + token 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }
   export function deleteSubTask(token, id_subtask){
    return fetch("/api/subtasks/" + id_subtask ,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'token=' + token 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }
   export function deleteFiles(token, file_name){
    return fetch("/api/tasks/files/" + file_name,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'token=' + token 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }
   export function deleteMessage(token, id_message){
    return fetch("/api/tasks/messages/" + id_message,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'token=' + token 
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }
   export function deleteManager(token, id_task, id_user){
    return fetch("/api/tasks/"+ id_task + "/user",{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'token=' + token + '&id_user=' + id_user
        })
       .then(resp =>  { 
         if(!resp.ok){
           throw new Error(resp.statusText);
         }
         return resp.json()
       })  
   }

