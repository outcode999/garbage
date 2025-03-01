import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  
  console.log(formData);
  const { feedbackId } = useParams();
  
  const navigate = useNavigate();

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  


  useEffect(() => {
    try {
      const fetchFeed = async () => {
        const res = await fetch(`/api/feed/allfeed?FeedbackId=${feedbackId}`);
        const data = await res.json();
        

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selectedFeed = data.Feed.find(
            (feedback) => feedback._id === feedbackId
          );
          if (selectedFeed ) {
            setFormData(selectedFeed);
            console.log(selectedFeed);
          }
        }
      };
      fetchFeed();
    } catch (error) {
      console.log(error.message);
    }
  }, [feedbackId]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/feed/updatee/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }

      if (res.ok) {
        setErrorMessage(null);
        navigate(`/feed`);
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };













  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
            <h3 className="font-semibold text-slate-400 ml-1">Name</h3>
              <input
              className=" bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Name"
                id="name"
                onChange={handlchange}
                value={formData.name}
              />
            </div>
            
            <div className="flex items-center">
  
  <select
    className="bg-slate-100 p-3 rounded-lg w-[460px] h-11 ml-2"
    id="rate"
    onChange={handlchange}
    value={formData.rate}
  >
    <option value="">Select Rate</option>
    <option value="poor">Poor</option>
    <option value="middle">Middle</option>
    <option value="rich">Rich</option>
  </select>
</div>
<div>
  <h3 className="font-semibold text-slate-400 ml-1">Description</h3>
  <textarea
    className="bg-slate-100 p-3 rounded-lg w-[460px] h-32 resize-none"
    placeholder="Description"
    id="Description"
    onChange={handlchange}
    maxLength={100}
    value={formData.Description}
  />
</div>
            <button
              className=" bg-blue-700 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
              type="submit"
              
            >
              Update
            </button>
          
          </form>
          
          {errorMessage && (
            <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center " >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

