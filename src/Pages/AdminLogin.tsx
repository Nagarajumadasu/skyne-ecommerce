import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            navigate("/admin/dashboard");
        } catch (error) {
            
        }

        setIsLoading(false);
    }

  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin