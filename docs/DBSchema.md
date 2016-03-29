BOARDS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Subject   | String  | Not null                |
| Author ID | Integer | Not null, foreign key   |

CARDS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Title     | String  | Not null                |
| List ID   | Integer | Not null, foreign key   |
| Author ID | Integer | Not null, foreign key   |


TASKS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Body      | String  | Not null                |
| Due Date  | Date    | Allow null              |
| Author ID | Integer | Not null, foreign key   |
| Card ID   | Integer | Not null, foreign key   |

TASKS: BONUS

| Column     | Type    | Details                 |
| -----------|---------|------------------------ |
| Assoc Task | Integer | Allow null, foreign key |


COMMENTS

| Column    | Type    | Details                 |
| ----------|---------|------------------------ |
| Body      | String  | Not null                |
| Author ID | Integer | Not null, foreign key   |
| Card ID   | Integer | Not null, foreign key   |




