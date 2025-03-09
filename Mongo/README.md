# Course Selling Website

## Description
This project is a simple course-selling web application that supports two types of users:
- **Admins**: Can sign up and create courses.
- **Users**: Can sign up, view available courses, and purchase them.

The authentication for this project is basic and does not use JWT. Instead, username and password are sent in headers for every authenticated request. All data is stored persistently using MongoDB.

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

---

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-repo/course-selling-app.git
cd course-selling-app
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up MongoDB
Make sure you have MongoDB installed and running locally, or use a MongoDB Atlas instance. Update your database connection URL in the code accordingly.

### 4. Start the server
```sh
node index.js
```

---

## API Routes

### **Admin Routes**

#### **1. Admin Signup**
**Endpoint:** `POST /admin/signup`
**Description:** Creates a new admin account.
**Input Body:**
```json
{
  "username": "admin",
  "password": "pass"
}
```
**Output:**
```json
{
  "message": "Admin created successfully"
}
```

#### **2. Create a Course**
**Endpoint:** `POST /admin/courses`
**Headers:**
```json
{
  "username": "admin",
  "password": "pass"
}
```
**Input Body:**
```json
{
  "title": "Course Title",
  "description": "Course Description",
  "price": 100,
  "imageLink": "https://linktoimage.com"
}
```
**Output:**
```json
{
  "message": "Course created successfully",
  "courseId": "new_course_id"
}
```

#### **3. Get All Courses**
**Endpoint:** `GET /admin/courses`
**Headers:**
```json
{
  "username": "admin",
  "password": "pass"
}
```
**Output:**
```json
{
  "courses": [
    {
      "id": 1,
      "title": "Course Title",
      "description": "Course Description",
      "price": 100,
      "imageLink": "https://linktoimage.com",
      "published": true
    }
  ]
}
```

---

### **User Routes**

#### **1. User Signup**
**Endpoint:** `POST /users/signup`
**Input Body:**
```json
{
  "username": "user",
  "password": "pass"
}
```
**Output:**
```json
{
  "message": "User created successfully"
}
```

#### **2. Get Available Courses**
**Endpoint:** `GET /users/courses`
**Headers:**
```json
{
  "username": "user",
  "password": "pass"
}
```
**Output:**
```json
{
  "courses": [
    {
      "id": 1,
      "title": "Course Title",
      "description": "Course Description",
      "price": 100,
      "imageLink": "https://linktoimage.com",
      "published": true
    }
  ]
}
```

#### **3. Purchase a Course**
**Endpoint:** `POST /users/courses/:courseId`
**Headers:**
```json
{
  "username": "user",
  "password": "pass"
}
```
**Output:**
```json
{
  "message": "Course purchased successfully"
}
```

#### **4. Get Purchased Courses**
**Endpoint:** `GET /users/purchasedCourses`
**Headers:**
```json
{
  "username": "user",
  "password": "pass"
}
```
**Output:**
```json
{
  "purchasedCourses": [
    {
      "id": 1,
      "title": "Course Title",
      "description": "Course Description",
      "price": 100,
      "imageLink": "https://linktoimage.com",
      "published": true
    }
  ]
}
```

---

## Future Improvements
- Implement **JWT-based authentication**.
- Add a **frontend** to interact with the API.
- Improve **database security** and data validation.

---

## License
This project is open-source and available under the **MIT License**.

---

## Contributors
- **Your Name** - [GitHub Profile](https://github.com/your-profile)

