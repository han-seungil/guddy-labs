package guestbook;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class SignGuestbookServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2733502940600139641L;
	
	private static final Logger log = Logger.getLogger(SignGuestbookServlet.class.getName());

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		UserService userService = UserServiceFactory.getUserService();
		User user = userService.getCurrentUser();
		
		String content = req.getParameter("content");
		if(content == null){
			content = "(No greeting)";
		}
		
		if(user != null){
			log.info("Greeting posted by user " + user.getNickname() + ":"+content);
		} else{
			log.info("Greeting posted anonymously: " + content);
		}
		resp.sendRedirect("guestbook.jsp");
	}
	
	

}
