using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException
    {
        public AppException(int sttusCode, string message, string details = null)
        {
            SttusCode = sttusCode;
            Message = message;
            Details = details;
        }

        public int SttusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}
